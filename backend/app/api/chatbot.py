from fastapi import APIRouter, HTTPException, Request
import requests
import logging

router = APIRouter()

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


@router.post("/chat")
async def chat(request: Request):
    try:
        logger.debug("Received a request")
        body = await request.json()
        logger.debug(f"Request body: {body}")

        message = body.get('message')
        if not message:
            logger.error("No message found in the request body")
            raise HTTPException(status_code=400, detail="Message field is required")

        logger.debug(f"Sending message to Rasa: {message}")
        response = requests.post(
            'http://localhost:5005/webhooks/rest/webhook',
            json={"sender": "user", "message": message}
        )
        response.raise_for_status()
        logger.debug(f"Rasa response status: {response.status_code}")
        logger.debug(f"Rasa response body: {response.json()}")
        return response.json()
    except requests.RequestException as e:
        logger.error(f"Error communicating with Rasa server: {str(e)}")
        raise HTTPException(status_code=500, detail="Error communicating with Rasa server: " + str(e))
    except Exception as e:
        logger.error(f"An unexpected error occurred: {str(e)}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred: " + str(e))
