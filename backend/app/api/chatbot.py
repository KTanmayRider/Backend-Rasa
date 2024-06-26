from fastapi import APIRouter, HTTPException, Request
import requests

router = APIRouter()

@router.post("/chat")
async def chat(request: Request):
    try:
        body = await request.json()
        message = body.get('message')
        response = requests.post(
            'http://localhost:5005/webhooks/rest/webhook',
            json={"sender": "user", "message": message}
        )
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))
