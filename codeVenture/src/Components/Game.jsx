import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { Howl } from 'howler';

export default function Game() {
  const fieldContainer = useRef(null); // Riferimento del campo
  const characterRef = useRef(null); // Riferimento del personaggio
  const npcRef = useRef(null); // Riferimento dell''NPC
  const characterSpeed = 5;
  const jumpVelocity = -10;
  const gravity = 0.5;
  const scrollSpeed = 0.5; // velocità dello scroll
  useEffect(() => {
    const app = new PIXI.Application({
      width: 900,
      height: 600,
      transparent: true,
    });

    fieldContainer.current.appendChild(app.view);
    // dimesnisoni campo 
    const fieldWidth = 1200; 
    const fieldHeight = 600;

    // immagine campo da gioco  
    const fieldTexture = PIXI.Texture.from('sfondo.jpg');
    const field = new PIXI.Sprite(fieldTexture);
    field.width = fieldWidth;
    field.height = fieldHeight;

    app.stage.addChild(field);

    // personaggio principale
    const characterTexture = PIXI.Texture.from('personaggio.png');
    const character = new PIXI.Sprite(characterTexture);
    // dimensioni del personaggio
    character.width = 300;
    character.height = 300;
    //posizione del personaggio 
    character.anchor.set(0.5, 0.21);
    character.x = app.screen.width / 2;
    character.y = app.screen.height / 2;

    let isRunning = false;
    let isJumping = false;
    let jumpVelocity = 0;
    let scrollDirection = 0; // dirrezione scrolling

    app.stage.addChild(character);
    characterRef.current = character;

    const addNPC = () => {
      // NPc 
      const npcTexture = PIXI.Texture.from('personaggio.png'); 

      const npc = new PIXI.Sprite(npcTexture);
      npc.width = 300;
      npc.height = 300;
      npc.anchor.set(0.5, 0.21);

      npc.x = character.x + 350; 
      npc.y = character.y; 

      app.stage.addChild(npc);
      npcRef.current = npc; 
    
    };

    addNPC();
      //  movimento del personaggio
    const handleKeyDown = (event) => {
      const character = characterRef.current;

      if (event.key === 'ArrowLeft') {
        character.x -= isRunning ? characterSpeed * 2 : characterSpeed;
        scrollDirection = -1;
      }
      if (event.key === 'ArrowRight') {
        character.x += isRunning ? characterSpeed * 2 : characterSpeed;
        scrollDirection = 1;
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
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        scrollDirection = 0;
      }
    };
      //  eventi jump
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

      // scrolling 
      if (scrollDirection === 1) {
        field.x -= characterSpeed * scrollSpeed; 
        if (field.x < -fieldWidth + app.screen.width) {
          field.x = -fieldWidth + app.screen.width;
        }
      } else if (scrollDirection === -1) {
        field.x += characterSpeed * scrollSpeed; 
        if (field.x > 0) {
          field.x = 0;
        }
      }
    };
    // musica Howler
    const music = new Howl({
      src: ['01music.mp3'], 
      volume: 0.5,
    });

    music.play();

    // intervallo che riproduce la canzone da a 1 secondo dopo 17 secondi
    setInterval(() => {
      music.seek(0); 
    }, 17000); 

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    app.ticker.add(() => {
      updateCharacterPosition();
    });

    return () => {
      // la musica  viene fermata quando il componente viene smontato 
      music.stop();

      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <div id="field-container" ref={fieldContainer}></div>;
}