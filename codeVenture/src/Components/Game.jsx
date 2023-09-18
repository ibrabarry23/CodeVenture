import React, { useRef, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Howl } from 'howler';

export default function Game() {
  const fieldContainer = useRef(null);
  const characterRef = useRef(null);
  const npcRef = useRef(null);
  const characterSpeed = 5;
  const jumpVelocity = -10;
  const gravity = 0.6;
  let isRunning = false;
  let isJumping = false;
  let characterJumpVelocity = 0;
  let collisionOccurred = false;
  let conversationActive = false;

  const [scrollDirection, setScrollDirection] = useState(0);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
    });

    const handleResize = () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    };

    fieldContainer.current.appendChild(app.view);

    const fieldWidth = window.innerWidth;
    const fieldHeight = window.innerHeight;

    const fieldTexture = PIXI.Texture.from('sfondo.jpg');
    const field = new PIXI.Sprite(fieldTexture);
    field.width = fieldWidth;
    field.height = fieldHeight;

    app.stage.addChild(field);

    const characterTexture = PIXI.Texture.from('personaggio.png');
    const character = new PIXI.Sprite(characterTexture);
    character.width = 300;
    character.height = 300;
    character.anchor.set(0.5, 0.21);
    character.x = app.screen.width / 4;
    character.y = app.screen.height / 1.7;

    app.stage.addChild(character);
    characterRef.current = character;

    const addNPC = () => {
      const npcTexture = PIXI.Texture.from('personaggio.png');
      const npc = new PIXI.Sprite(npcTexture);
      npc.width = 300;
      npc.height = 300;
      npc.anchor.set(0.5, 0.21);
      npc.x = character.x + 1150;
      npc.y = character.y;
      app.stage.addChild(npc);
      npcRef.current = npc;
    };

    addNPC();

    window.addEventListener('resize', handleResize);

    const handleKeyDown = (event) => {
      const character = characterRef.current;

      if (event.key === 'ArrowLeft') {
        character.x -= isRunning ? characterSpeed * 2 : characterSpeed;
        setScrollDirection(-1); 
      }

      if (event.key === 'ArrowRight') {
        const maxX = character.x + 550;
        const newCharacterX = character.x + (isRunning ? characterSpeed * 2 : characterSpeed);

        if (newCharacterX <= maxX) {
          character.x = newCharacterX;
          setScrollDirection(1);
        }
      }

      if (event.key === 'ArrowUp' && !isJumping) {
        isJumping = true;
        characterJumpVelocity = jumpVelocity;
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
        setScrollDirection(0); 
      }
    };

    const updateCharacterPosition = () => {
      const character = characterRef.current;
      const npc = npcRef.current;

      if (isJumping) {
        characterJumpVelocity += gravity;
        character.y += characterJumpVelocity;

        if (character.y >= app.screen.height / 1.7) {
          character.y = app.screen.height / 1.7;
          isJumping = false;
          characterJumpVelocity = 0;
        }
      }

      const characterBounds = character.getBounds();
      const npcBounds = npc.getBounds();

      if (
        characterBounds.x + characterBounds.width > npcBounds.x &&
        characterBounds.x < npcBounds.x + npcBounds.width &&
        characterBounds.y + characterBounds.height > npcBounds.y &&
        characterBounds.y < npcBounds.y + npcBounds.height
      ) {
        // Il personaggio e l'NPC si sono scontrati
        //  il personaggio si ferma
        isRunning = false;
        if (!collisionOccurred) {
          collisionOccurred = true;
          // Si attiva la conversazione
          startConversation(app);
        }
      } else {
        collisionOccurred = false;
      }

      
      if (isRunning && !collisionOccurred) {
        character.x += characterSpeed;
      }
    };

    const startConversation = (app) => {
      if (!conversationActive) {
        conversationActive = true;


        //rettangolo bianco
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xffffff);
        graphics.drawRect(600, 700, 900, 150,100);
        graphics.endFill();
        app.stage.addChild(graphics);

        let conversationText = new PIXI.Text('Ciao, sono code è da oggi inzierà la tua avventura nella programmazione', {
          fontFamily: 'Arial',
          fontSize: 24,
          fill: 0x000000,
        });
        conversationText.x = 650;
        conversationText.y = 750;
        app.stage.addChild(conversationText);

        graphics.interactive = true;
        graphics.buttonMode = true; 
        graphics.on('pointerdown', () => {
          app.stage.removeChild(graphics);
          app.stage.removeChild(conversationText);

          //  il testo cambia quando viene fatto clic
          if (conversationText.text === 'Ciao, sono code è da oggi inzierà la tua avventura nella programmazione') {
            conversationText.text = 'La tua avventura incomincia dalle variabili';
          } else if (conversationText.text === 'La tua avventura incomincia dalle variabili') {
            conversationText.text = `Una variabile è un oggetto che rappresenta una posizione di memoria in cui 
          è possibile memorizzare e recuperare un valore.`;
          } else if (conversationText.text === `Una variabile è un oggetto che rappresenta una posizione di memoria in cui 
          è possibile memorizzare e recuperare un valore.`) {
            conversationText.text = `Una variabile ha un nome univoco che viene utilizzato 
            per identificarla nel programma`;
          } else if (conversationText.text === 'Sto bene, grazie!') {
            conversationText.text = 'Come posso aiutarti?';
          } else {
            conversationActive = false;
          }
          
          app.stage.addChild(graphics);
          app.stage.addChild(conversationText);
        });
      }
    };

    const music = new Howl({
      src: ['01music.mp3'],
      volume: 0.5,
    });

    music.play();

    setInterval(() => {
      music.seek(0);
    }, 17000);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    app.ticker.add(() => {
      updateCharacterPosition();
    });

    return () => {
      music.stop();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <div id="field-container" ref={fieldContainer}></div>;
}
