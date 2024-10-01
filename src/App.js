/**
 * Main application component that manages the overall state and rendering 
 * of the note-taking application. It handles the loading of notes from 
 * local storage, and provides functionality for adding, viewing, and updating notes.
 * 
 * @returns {JSX.Element} The main application layout, including the sidebar 
 * for note titles and the main content area for displaying the selected view 
 * (welcome message, new note form, note details, or update note form).
 */

import "./App.css";
import { useEffect, useState } from "react";

import { initialNote } from "./Logic";
import { Welcom } from "./components/Welcom";
import { NewNote } from "./components/NewNote";
import { Note } from "./components/Note";
import { UpdateNote } from "./components/UpdateNote";
import { NoteTitleList } from "./components/NoteTitleList";

function App() {
  const [notes, setNotes] = useState([]);
  const [previewContent, setPreviewContent] = useState("welcom");
  const [showingMessage, setShowingMessage] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

  useEffect(() => {
    setNotes(initialNote());
  }, [localStorage.getItem("mynotes")]);

  return (
    <div className="App">
      <div className="notes-section">
        <div className="sidebar-header">
          <h1
            className="sidbarTitle"
            onClick={() => setPreviewContent("welcom")}
          >
            القائمة
          </h1>
          <button
            className="addnew-note"
            onClick={() => setPreviewContent("newNote")}
          >
            +
          </button>
        </div>
        <NoteTitleList
          notes={notes}
          setSelectedNote={setSelectedNote}
          setPreviewContent={setPreviewContent}
          setUpdatedContent={setUpdatedContent}
          setUpdatedTitle={setUpdatedTitle}
          selectedNote={selectedNote}
        />
      </div>

      {previewContent === "welcom" && (
        <Welcom>
          <h2>مرحبا بكم</h2>
          <h4>هنا اكادمية حاسوب</h4>
        </Welcom>
      )}
      {previewContent === "newNote" && (
        <NewNote
          showingMessage={showingMessage}
          errorMessages={errorMessages}
          setShowingMessage={setShowingMessage}
          setErrorMessages={setErrorMessages}
          setPreviewContent={setPreviewContent}
          notes={notes}
        />
      )}
      {previewContent === "viewitem" && (
        <Note
          setUpdatedContent={setUpdatedContent}
          setUpdatedTitle={setUpdatedTitle}
          setPreviewContent={setPreviewContent}
          selectedNote={selectedNote}
          notes={notes}
          setSelectedNote={setSelectedNote}
        />
      )}
      {previewContent === "updateNote" && (
        <UpdateNote
          updatedTitle={updatedTitle}
          setUpdatedTitle={setUpdatedTitle}
          updatedContent={updatedContent}
          setUpdatedContent={setUpdatedContent}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          showingMessage={showingMessage}
          setShowingMessage={setShowingMessage}
          errorMessages={errorMessages}
          setErrorMessages={setErrorMessages}
          setPreviewContent={setPreviewContent}
          notes={notes}
        />
      )}
    </div>
  );
}

export default App;
