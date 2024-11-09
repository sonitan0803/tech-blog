from fastapi import FastAPI

from routers  import users  # routersをインポート

app = FastAPI()


@app.get("/")
async def api_endpoint():
    return {"message": "APIからこんにちは"}


app.include_router(users.router)