import { isMobile } from 'react-device-detect'

const number = (isMobile) ? 5 : 80
const maxNum = (isMobile) ? 7 : 100
const hover = (isMobile) ? false : true
const clickEffect = (isMobile) ? false : true
const size = (isMobile)
  ? { min: 30, max: 60 }
  : { min: 10, max: 40 }
const opacity = (isMobile)
  ? { min: 0.3, max: 0.6 }
  : { min: 0.1, max: 0.4 }
const density = (isMobile)
  ? { enable: true, width: 600, height: 600 }
  : { enable: true, width: 1920, height: 1080 }

const emojis = ['😈', '😇', '🙏', '💀', '😭', '😂', '😂', '🎃', '👽', '🙈', '🙉', '🙊', '🦍', '😵', '😤', '😰', '🥴', '😍', '❤️', '😱', '🥺', '🥹', '🥰', '😷', '🤮', '🤒', '🫨', '🤯', '🤯', '🤓', '🥸','😎', '🤗', '😅', '🤩', '😘', '💋', '🤠', '🧐', '😏', '🍆', '😌', '😪', '🥶', '💩', '👺', '👻', '😳', '🐻', '🐶', '😼', '😽', '🌈', '🌚 🌝', '🌞', '⛄', '🍄', '👸', '🐝', '🐳', '🐷', '🤷‍♂️', '🤷‍♀️', '🤷‍♀️', '🙋', '🤦', '💔', '👩‍❤️‍👩', '💍', '🤵', '👨', '💪', '🤖', '👾', '🔫', '🚀', '🛸', '💡', '🤔', '🧝', '🎅', '😵‍💫', '💫', '⭐']

const options = {
    autoPlay: true,
    background: {
      color: { value: '#000B18' },
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      opacity: 1
    },
    backgroundMask: {
      composite: "destination-out",
      cover: { color: { value: "#fff" }, opacity: 1 },
      enable: false
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: { enable: true, zIndex: 0 },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: { enable: clickEffect, mode: "push" },
        onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
        onHover: {
          enable: hover,
          mode: "repulse",
          parallax: { enable: false, force: 2, smooth: 10 }
        },
        resize: { delay: 0.5, enable: true }
      },
      modes: {
        trail: { delay: 1, pauseOnStop: false, quantity: 1 },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: { distance: 200 },
        bubble: { distance: 200, duration: 0.4, mix: false },
        connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
        grab: {
          distance: 100,
          links: { blink: false, consent: false, opacity: 1 }
        },
        push: { default: true, groups: [], quantity: 4 },
        remove: { quantity: 2 },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: []
          }
        },
        slow: { factor: 3, radius: 200 },
        light: {
          area: {
            gradient: {
              start: { value: "#ffffff" },
              stop: { value: "#000000" }
            },
            radius: 1000
          },
          shadow: { color: { value: "#000000" }, length: 2000 }
        }
      }
    },
    manualParticles: [],
    particles: {
      bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
      collisions: {
        absorb: { speed: 2 },
        bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: { enable: true, retries: 0 }
      },
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0
          }
        }
      },
      effect: { close: true, fill: true, options: {}, type: [] },
      groups: {},
      move: {
        angle: { offset: 0, value: 90 },
        attract: { distance: 200, enable: false, rotate: { x: 3000, y: 3000 } },
        center: { x: 50, y: 50, mode: "percent", radius: 0 },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50
        },
        path: { clamp: true, delay: { value: 0 }, enable: false, options: {} },
        outModes: { default: "out" },
        random: false,
        size: false,
        speed: 2,
        spin: { acceleration: 0, enable: false },
        straight: false,
        trail: { enable: false, length: 10, fill: {} },
        vibrate: false,
        warp: false
      },
      number: {
        density: density,
        limit: { mode: "delete", value: number},
        value: maxNum,
      },
      opacity: {
        value: opacity,
        animation: {
          count: 0,
          enable: true,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none"
        }
      },
      reduceDuplicates: true,
      shadow: {
        blur: 0,
        color: { value: "#000" },
        enable: false,
        offset: { x: 0, y: 0 }
      },
      shape: {
        close: true,
        fill: true,
        options: {
          char: [
            {
              fill: true,
              style: "",
              value: emojis,
              weight: "400"
            },
            {
              fill: true,
              style: "",
              value: emojis,
              weight: "900"
            }
          ]
        },
        type: "char"
      },
      size: {
        value: size,
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none"
        }
      },
      stroke: {
        width: 1,
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0
            }
          }
        }
      },
      zIndex: { value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: { value: 3 },
          rate: { value: { min: 4, max: 9 } },
          sizeOffset: true
        }
      },
      roll: {
        darken: { enable: false, value: 0 },
        enable: false,
        enlighten: { enable: false, value: 0 },
        mode: "vertical",
        speed: 25
      },
      tilt: {
        value: 0,
        animation: { enable: false, speed: 0, decay: 0, sync: false },
        direction: "clockwise",
        enable: false
      },
      twinkle: {
        lines: { enable: false, frequency: 0.05, opacity: 1 },
        particles: { enable: false, frequency: 0.05, opacity: 1 }
      },
      wobble: { distance: 5, enable: false, speed: { angle: 50, move: 10 } },
      life: {
        count: 0,
        delay: { value: 0, sync: false },
        duration: { value: 0, sync: false }
      },
      rotate: {
        value: 0,
        animation: { enable: false, speed: 0, decay: 0, sync: false },
        direction: "clockwise",
        path: false
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false
        },
        enable: false,
        opacity: 1,
        rotation: { value: 45 },
        width: 1
      },
      links: false,
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    name: "Font Awesome",
    motion: { disable: false, reduce: { factor: 4, value: true } }
}

export default options

