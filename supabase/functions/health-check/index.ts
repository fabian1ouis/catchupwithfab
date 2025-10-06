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

  // Handle POST requests with empty body validation
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      
      // Check if body is empty object
      if (Object.keys(body).length === 0) {
        return new Response(
          JSON.stringify({ 
            status: "error",
            message: "Empty request body. Health check does not require a request body."
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
    } catch (error) {
      return new Response(
        JSON.stringify({ 
          status: "error",
          message: "Invalid JSON in request body"
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

  // Only allow GET and POST requests for health check
  if (req.method !== 'GET' && req.method !== 'POST') {
    return new Response(
      JSON.stringify({ 
        status: "error",
        message: `Method ${req.method} not allowed. Only GET and POST requests are supported.`
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
