import React, { useRef, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Link, useNavigate } from 'react-router-dom';
import FrameSetting from './FrameSetting/FrameSetting';

export default function Game() {
  const [showSetting, setShowSetting] = useState(false);
  const fieldContainer = useRef(null);
  const characterRef = useRef(null);
  const npcRef = useRef(null);
  const navigate = useNavigate();

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
    character.anchor.set(0.15, 0.20);
    character.x = app.screen.width / 4;
    character.y = app.screen.height / 1.67;

    app.stage.addChild(character);
    characterRef.current = character;

    const addNPC = () => {
      const npcTexture = PIXI.Texture.from('personaggio.png');
      const npc = new PIXI.Sprite(npcTexture);
      npc.width = 300;
      npc.height = 300;
      npc.anchor.set(0.5, 0.21);
      npc.x = character.x + 610;
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
        isRunning = false;
        if (!collisionOccurred) {
          collisionOccurred = true;
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
    
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFFFFF, 0.8);
        graphics.drawRoundedRect(70, 20, app.screen.width - 300, 400, 15); // Smaller box dimensions
        graphics.endFill();
        app.stage.addChild(graphics);
    
        let conversationText = new PIXI.Text(`   Ciao, in questo livello vedrai le funzioni.
    
    Una funzione è un blocco di codice che può essere chiamato o eseguito per svolgere una specifica operazione o compito.
    Le funzioni consentono di organizzare il codice in unità modulari e riutilizzabili, facilitando la scrittura, la comprensione 
    e la manutenzione  del programma.
    
    Funzioni ricorsive: Una funzione ricorsiva è un modo di definire una funzione in cui la sua implementazione si basa sulla
    sua stessa definizione, frammentando il problema principale in sottoproblemi più piccoli.
    Questa definizione si articola in due parti cruciali: il caso base e il passo induttivo.`, {
          fontFamily: 'Arial',
          fontSize: 20, // Smaller font size
          fill: 0x000000,
          wordWrap: true,
          wordWrapWidth: app.screen.width - 80, // Adjusted for the smaller box
        });
        conversationText.x = 80;
        conversationText.y = 50;
        app.stage.addChild(conversationText);
    
        const button = new PIXI.Text('Vai all\'esercizio', {
          fontFamily: 'Arial',
          fontSize: 20, // Slightly smaller button text
          fill: 0xFFFFFF,
          fontWeight: 'bold'
        });
        const buttonBackground = new PIXI.Graphics();
        buttonBackground.beginFill(0x0000FF);
        buttonBackground.drawRoundedRect(0, 0, button.width + 20, button.height + 10, 10);
        buttonBackground.endFill();
        button.x = 10;
        button.y = 5;
        buttonBackground.x = app.screen.width / 2 - buttonBackground.width / 2;
        buttonBackground.y = 360; // Adjusted position for the smaller box
        buttonBackground.addChild(button);
        buttonBackground.eventMode = 'static';
        buttonBackground.cursor = 'pointer';
        app.stage.addChild(buttonBackground);
    
        buttonBackground.on('pointerdown', () => {
          app.stage.removeChild(graphics);
          app.stage.removeChild(conversationText);
          app.stage.removeChild(buttonBackground);
          conversationActive = false;
          navigate('/code-editor');
        });
      }
    };
    

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    app.ticker.add(updateCharacterPosition);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      app.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, [navigate]);

  const handleHome = () => {
    let body = document.querySelector("body");
    body.className = "bg";
  };

  const handleShowSetting = () => {
    setShowSetting(prev => !prev);
    if (!showSetting) {
      let canva = document.querySelector("canvas");
      canva.className = "hide";
      let body = document.querySelector("body");
      body.className = "nobg";
    } else {
      let canva = document.querySelector("canvas");
      canva.className = "vis";
      let body = document.querySelector("body");
      body.className = "bg";
    }
  };

  return (
    <div className="relative">
      <div id="field-container" ref={fieldContainer} className="relative">
      </div>
      <button className='impostazioni' onClick={handleShowSetting}>
        {!showSetting ? <img src="./src/assets/image/ingranaggio.gif" alt="settings" /> : <img src="./src/assets/image/x.png" alt="close" />}
      </button>
      {showSetting && <FrameSetting />}
      <Link onClick={handleHome} className='absolute impostazioni2' to="/"><img src="./src/assets/image/home.png" alt="home" /></Link>
    </div>
  );
}
