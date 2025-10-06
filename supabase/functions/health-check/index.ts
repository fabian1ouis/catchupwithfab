import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow GET requests for health check
  if (req.method !== 'GET') {
    return new Response(
      JSON.stringify({ 
        status: "error",
        message: `Method ${req.method} not allowed. Only GET requests are supported.`
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 405
      }
    );
  }

  // Handle malformed POST/PUT data gracefully
  if (req.body) {
    try {
      await req.text(); // Attempt to read body to ensure no malformed data causes issues
    } catch (error) {
      return new Response(
        JSON.stringify({ 
          status: "error",
          message: "Malformed request body"
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          },
          status: 400
        }
      );
    }
  }

  try {
    const response = {
      status: "healthy",
      message: "Service is operational and all systems are functioning normally",
      timestamp: new Date().toISOString(),
      service: "Fabian Louis Blog API",
      version: "1.0.0",
      endpoints: {
        blog: "/blog-posts",
        newsletter: "/newsletter",
        contact: "/contact"
      }
    };

    return new Response(
      JSON.stringify(response),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 200
      }
    );
  } catch (error) {
    console.error('Health check error:', error);
    return new Response(
      JSON.stringify({ 
        status: "error",
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 500
      }
    );
  }
});
