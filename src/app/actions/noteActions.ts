
import { databases } from "@/utils/appwrite";
import { ID } from "appwrite";

export async function addNote(content: String): Promise<Note> {

    const newNote = { content: content }

    const response = await databases.createDocument(
        'NotesApp',
        'notes',
        ID.unique(),
        newNote
    )

    const note = {
        $id: response.$id,
        $createdAt: response.$createdAt,
        content: response.content
    }

    return note
}

export async function getNotes(): Promise<Note[]> {

    const response = await databases.listDocuments(
        'NotesApp',
        'notes'
    )

    console.log(response.documents)
    const notes = response.documents.map((doc) => ({
        $id: doc .$id,
        $createdAt: doc .$createdAt,
        content: doc .content
    }))

    return notes;
}

export async function deleteNote(noteId: string) {
    await databases.deleteDocument(
        'NotesApp',
        'notes',
        noteId
    )
}