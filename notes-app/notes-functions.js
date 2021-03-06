'use strict';

// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');

  return notesJSON !== null ? JSON.parse(notesJSON) : [];
};

// Save the notes to localStorage
const saveNotes = notes => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// remove notes
const removeNote = id => {
  const noteIndex = notes.findIndex(note => {
    return note.id === id;
  });
  if (noteIndex > -1) {
    note.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const generateNoteDOM = note => {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('a');
  const button = document.createElement('button');

  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', function() {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }
  textEl.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.appendChild(textEl);

  return noteEl;
};

// Sort the notes
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else return 0;
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt > b.createdAt) {
        return 1;
      } else return 0;
    });
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.towLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.towLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else return 0;
    });
  }
};

// Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );
  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(note => {
    const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};

const generateLastEdited = timestamp => {
  return `Last edited ${moment(timestamp).fromNow()}`;
};
