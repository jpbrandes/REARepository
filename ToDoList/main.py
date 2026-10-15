from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def conectar_db():
    conn = sqlite3.connect("banco.db")
    conn.row_factory = sqlite3.Row
    return conn

def inicializar_db():
    conn = conectar_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            concluida BOOLEAN NOT NULL DEFAULT 0
        )
    """)
    conn.commit()
    conn.close()

inicializar_db()

class Tarefa(BaseModel):
    titulo: str
    concluida: bool = False

# 1. CREATE
@app.post("/tarefas")
def criar_tarefa(tarefa: Tarefa):
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO tarefas (titulo, concluida) VALUES (?, ?)", (tarefa.titulo, tarefa.concluida))
    conn.commit()
    novo_id = cursor.lastrowid
    conn.close()
    return {"id": novo_id, "titulo": tarefa.titulo, "concluida": tarefa.concluida}

# 2. READ
@app.get("/tarefas")
def listar_tarefas():
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tarefas")
    tarefas = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return tarefas

# 3. UPDATE
@app.put("/tarefas/{tarefa_id}")
def atualizar_tarefa(tarefa_id: int, tarefa: Tarefa):
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("UPDATE tarefas SET titulo = ?, concluida = ? WHERE id = ?", (tarefa.titulo, tarefa.concluida, tarefa_id))
    conn.commit()
    conn.close()
    return {"mensagem": "Tarefa atualizada com sucesso!"}

# 4. DELETE
@app.delete("/tarefas/{tarefa_id}")
def deletar_tarefa(tarefa_id: int):
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM tarefas WHERE id = ?", (tarefa_id,))
    conn.commit()
    conn.close()
    return {"mensagem": "Tarefa deletada com sucesso!"}