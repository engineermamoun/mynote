/**
 * Displays a selected note with options to update or delete it.
 * 
 * @param {object} props - The properties passed to the component.
 * @param {function} props.setUpdatedContent - Function to set the content of the note being updated.
 * @param {function} props.setUpdatedTitle - Function to set the title of the note being updated.
 * @param {function} props.setPreviewContent - Function to set the preview content (update or welcome message).
 * @param {string|number} props.selectedNote - The id of the currently selected note.
 * @param {Array} props.notes - The current list of notes.
 * @param {function} props.setSelectedNote - Function to reset the selected note state after deletion.
 * @returns {JSX.Element} A section displaying the note's title and content with options to edit or delete the note.
 */
import { getNoteSelected } from "../../Logic";

export function Note(props) {
  const {
    setUpdatedContent,
    setUpdatedTitle,
    setPreviewContent,
    selectedNote,
    notes,
    setSelectedNote,
  } = props;

  let title = getNoteSelected(selectedNote, notes).title;
  let content = getNoteSelected(selectedNote, notes).content;

  const deleteNote = () => {
    let newNotes = notes.filter((note) => note.id != selectedNote);
    localStorage.setItem("mynotes", JSON.stringify(newNotes));
    setPreviewContent("welcom");
    setSelectedNote(null);
  };
  return (
    <div className="preview-section">
      <div className="note-tools">
        <div className="note-tools-left-side"></div>
        <div className="note-tools-right-side">
          <span
            className="note-tools-update-icon"
            onClick={() => {
              setUpdatedContent(content);
              setUpdatedTitle(title);
              setPreviewContent("updateNote");
            }}
          >
            تعديل
          </span>
          <span onClick={deleteNote} className="note-tools-delete-icon">
            {" "}
            مسح
          </span>
        </div>{" "}
      </div>{" "}
      <h2 className=" title">{title}</h2>
      <h4 className="subtitle">{content}</h4>
    </div>
  );
}
