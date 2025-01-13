from fastapi import FastAPI

from routers  import users  # routersをインポート

app = FastAPI()


@app.get("/")
async def api_endpoint():
    data = [
        [
            {
                "title":"a1"
            },
            {
                "title":"a2"
            }
        ],
        [{
                "title":"b1"
            },
            {
                "title":"b2"
            }],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [{
                "title":"z1"
            },
            {
                "title":"z2"
            }],
    ]
    return {"side_menu": data}


app.include_router(users.router)