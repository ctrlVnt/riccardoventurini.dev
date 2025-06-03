import { Component } from '@angular/core';
import { ClickMode, Engine, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { NgParticlesModule } from "ng-particles";
import { MenuComponent } from "../../../components/menu/menu.component";

@Component({
    selector: 'app-header',
    imports: [NgParticlesModule, MatSidenavModule, MatButtonModule, MenuComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    showFiller = false;
    id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions = {
      background: {
          color: {
              value: "transparent",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: ClickMode.push,
              },
              onHover: {
                  enable: true,
                  mode: HoverMode.repulse,
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 150,
                  duration: 0.5,
              },
          },
      },
      particles: {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 3,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 100,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
      },
      detectRetina: true,
  };

  
  async particlesInit(engine: Engine): Promise<void> {

      await loadSlim(engine);
  }
}
