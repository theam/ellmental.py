from typing import Callable, TypeVar
import os

ParamType = TypeVar("ParamType")
ReturnType = TypeVar("ReturnType")

def map_batched(items: list[ParamType], batch_size: int, function: Callable[[list[ParamType]], list[ReturnType]]) -> list[ReturnType]:
    result: list[ReturnType] = []
    for i in range(0, len(items), batch_size):
        chunk = items[i : i + batch_size]
        result.extend(function(chunk))
    return result

def get_env_or_fail(key: str) -> str:
    value = os.getenv(key)
    if value is None:
        raise Exception(f"Missing environment variable {key}")
    return value

def flatten(list: list[list[ParamType]]) -> list[ParamType]:
    return [item for sublist in list for item in sublist]