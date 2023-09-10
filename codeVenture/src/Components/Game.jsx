import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { Howl } from 'howler';

export default function Game() {
  const fieldContainer = useRef(null);
  const characterRef = useRef(null);
  const npcRef = useRef(null); // Riferimento all'NPC
  const characterSpeed = 5;
  const jumpVelocity = -10;
  const gravity = 0.5;
  const scrollSpeed = 0.5; // Rallenta lo scrolling impostando un valore inferiore

  useEffect(() => {
    const app = new PIXI.Application({
      width: 900,
      height: 600,
      transparent: true,
    });

    fieldContainer.current.appendChild(app.view);

    const fieldWidth = 1200;
    const fieldHeight = app.screen.height;

    const fieldTexture = PIXI.Texture.from('sfondo.jpg');
    const field = new PIXI.Sprite(fieldTexture);
    field.width = fieldWidth;
    field.height = fieldHeight;

    app.stage.addChild(field);
2
    const characterTexture = PIXI.Texture.from('personaggio.png');
    const character = new PIXI.Sprite(characterTexture);
    character.width = 300;
    character.height = 300;
    character.anchor.set(0.5, 0.21);
    character.x = app.screen.width / 2;
    character.y = app.screen.height / 2;

    let isRunning = false;
    let isJumping = false;
    let jumpVelocity = 0;
    let scrollDirection = 0; // 0: Nessuno, 1: Destra, -1: Sinistra

    app.stage.addChild(character);
    characterRef.current = character;

    const addNPC = () => {
      // Crea una texture per il personaggio NPC
      const npcTexture = PIXI.Texture.from('personaggio.png'); // Sostituisci 'buggy.png' con il percorso della texture del tuo personaggio NPC

      // Crea una nuova istanza del personaggio NPC
      const npc = new PIXI.Sprite(npcTexture);
      npc.width = 300;
      npc.height = 300;
      npc.anchor.set(0.5, 0.21);

      // Imposta la posizione del personaggio NPC vicino al personaggio principale
      npc.x = character.x + 350; // Puoi regolare questa posizione in base alle tue esigenze
      npc.y = character.y; // Stessa altezza del personaggio principale

      app.stage.addChild(npc);
      npcRef.current = npc; // Assegna il riferimento all'NPC
    
    };

    // Chiama la funzione per aggiungere l'NPC quando il componente si monta
    addNPC();

    const handleKeyDown = (event) => {
      const character = characterRef.current;

      if (event.key === 'ArrowLeft') {
        character.x -= isRunning ? characterSpeed * 2 : characterSpeed;
        scrollDirection = -1; // Sposta a sinistra
      }
      if (event.key === 'ArrowRight') {
        character.x += isRunning ? characterSpeed * 2 : characterSpeed;
        scrollDirection = 1; // Sposta a destra
      }
      if (event.key === 'ArrowUp' && !isJumping) {
        isJumping = true;
        jumpVelocity = -10;
      }
      if (event.key === 'Shift') {
        isRunning = true;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'Shift') {
        isRunning = false;
      }
      // Quando il tasto destra o sinistra viene rilasciato, interrompi lo scrolling
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        scrollDirection = 0;
      }
    };

    const updateCharacterPosition = () => {
      const character = characterRef.current;

      if (isJumping) {
        jumpVelocity += gravity;
        character.y += jumpVelocity;

        if (character.y >= app.screen.height / 2) {
          character.y = app.screen.height / 2;
          isJumping = false;
          jumpVelocity = 0;
        }
      }

      // Controlla la direzione dello scrolling e scorri il campo
      if (scrollDirection === 1) {
        field.x -= characterSpeed * scrollSpeed; // Lo scrolling è più lento
        if (field.x < -fieldWidth + app.screen.width) {
          field.x = -fieldWidth + app.screen.width;
        }
      } else if (scrollDirection === -1) {
        field.x += characterSpeed * scrollSpeed; // Lo scrolling è più lento
        if (field.x > 0) {
          field.x = 0;
        }
      }
    };

    // Aggiungi la musica utilizzando Howler.js
    const music = new Howl({
      src: ['01music.mp3'], // Sostituisci con il percorso del tuo file audio
      volume: 0.5,
    });

    // Inizia a riprodurre la musica quando il componente si monta
    music.play();

    // Imposta un intervallo per far tornare la riproduzione a 1 secondo dopo 17 secondi
    setInterval(() => {
      music.seek(0); // Imposta la riproduzione a 1 secondo
    }, 17000); // 17 secondi in millisecondi

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    app.ticker.add(() => {
      updateCharacterPosition();
    });

    return () => {
      // Ferma la musica quando il componente viene smontato
      music.stop();

      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <div id="field-container" ref={fieldContainer}></div>;
}