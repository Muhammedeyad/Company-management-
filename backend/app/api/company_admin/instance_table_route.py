from fastapi import APIRouter

router = APIRouter()

@router.post("/add")
def add_instance():
    return 'instance table router'