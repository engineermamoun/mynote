/**
 * Displays a list of note titles that can be clicked to view or edit the selected note.
 * If there are no notes, a message is shown prompting the user to add new content.
 *
 * @param {object} props - The properties passed to the component.
 * @param {Array} props.notes - The current list of notes to display.
 * @param {function} props.setSelectedNote - Function to set the currently selected note.
 * @param {function} props.setPreviewContent - Function to set the preview content (view or edit mode).
 * @param {function} props.setUpdatedContent - Function to set the content of the note being updated.
 * @param {function} props.setUpdatedTitle - Function to set the title of the note being updated.
 * @param {string|number} props.selectedNote - The ID of the currently selected note.
 * @returns {JSX.Element} A list of note titles, each clickable to display or edit the note.
 */

import { shortenTitle } from "../../Logic";

export function NoteTitleList(props) {
  const {
    notes,
    setSelectedNote,
    setPreviewContent,
    setUpdatedContent,
    setUpdatedTitle,
    selectedNote,
  } = props;
  return (
    <div>
      {notes.map((item, index) => {
        return (
          <div key={index}>
            <ul
              className="ntoes-list"
              onClick={() => {
                setSelectedNote(item.id);
                setPreviewContent("viewitem");
                setUpdatedContent(item.content);
                setUpdatedTitle(item.title);
              }}
            >
              <div
                className={
                  item.id === selectedNote ? "note-item green" : "note-item"
                }
              >
                {shortenTitle(item.title)}
              </div>
            </ul>
          </div>
        );
      })}
      {notes.length === 0 && (
        <div className="empty-notelist-div">
          <h4>لا يوجد محتوي لعرضه الان.</h4>
          <span> الرجاء اضافة محتوي جديد.</span>
        </div>
      )}
    </div>
  );
}
