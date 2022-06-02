import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/button";
import Note from "./note/note";

import "./notesStyles.css";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  console.log(notes);

  return (
    <>
      <div className="notesContainer">
        <div className="titleContainer">
          <h2>Notes</h2>
          <Button type="filled" onClick={() => console.log("New note")}>
            New note
          </Button>
        </div>
        <div className="notesGrid">
          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
            color="red"
          />
          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia. ¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
          />
          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
            color="purple"
          />

          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia. ¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
          />
          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
          />

          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia. ¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
          />
          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
          />

          <Note
            img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            title="Hola"
            text="¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia. ¡Hola! es una revista semanal en España especializada en noticias de celebridades, publicada en Madrid, España y en otros 15 países, con ediciones locales en Argentina, Brasil, Canadá, Chile, Colombia."
            creator="Juan"
            date="1"
          />
        </div>
      </div>
    </>
  );
};

export default Notes;
