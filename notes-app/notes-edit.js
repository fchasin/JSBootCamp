'use strict';

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-button');
const dateElement = document.querySelector('#last-edited');
let note = notes.find(function(note) {
  return note.id === noteId;
});

if (!note) {
  location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', e => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  saveNotes(notes);
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener('input', e => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  saveNotes(notes);
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener('click', e => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});

window.addEventListener('storage', e => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find(note => note.id === noteId);

    if (!note) {
      location.assign('/index.html');
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
