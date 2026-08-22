import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import gsap from 'gsap';

import './DepthCarousel.css';

/* =========================================================
   DEFAULT ITEMS
========================================================= */

const DEFAULT_ITEMS = [
  {
    image: 'https://picsum.photos/seed/depth1/800/1000',
    alt: 'Slide 1',
  },
  {
    image: 'https://picsum.photos/seed/depth2/800/1000',
    alt: 'Slide 2',
  },
  {
    image: 'https://picsum.photos/seed/depth3/800/1000',
    alt: 'Slide 3',
  },
  {
    image: 'https://picsum.photos/seed/depth4/800/1000',
    alt: 'Slide 4',
  },
  {
    image: 'https://picsum.photos/seed/depth5/800/1000',
    alt: 'Slide 5',
  },
  {
    image: 'https://picsum.photos/seed/depth6/800/1000',
    alt: 'Slide 6',
  },
];

/* =========================================================
   HELPERS
========================================================= */

const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);

const normalizeItem = (item) => {
  if (typeof item === 'string') {
    return {
      image: item,
      alt: '',
      type: 'image',
    };
  }

  return item ?? {};
};

const hasValidImage = (item) => {
  return (
    item?.type === 'image' &&
    typeof item?.image === 'string' &&
    item.image.trim() !== ''
  );
};

/* =========================================================
   COMPONENT
========================================================= */

const DepthCarousel = ({
  items = DEFAULT_ITEMS,

  cardWidth = 300,
  cardHeight = 380,

  radius = 18,

  tint = '#05060a',

  depth = 220,
  spread = 90,

  tilt = 22,
  tiltDirection = 'right',

  perspective = 1400,

  visibleCards = 4,

  falloff = 0.2,

  blur = 6,

  duration = 700,

  ease = 'power3.out',

  autoplay = false,

  autoplayDelay = 3200,

  loop = true,

  showControls = true,

  showIndicators = true,

  onChange,

  className = '',
}) => {
  /* =========================================================
     NORMALIZED DATA
  ========================================================= */

  const data = useMemo(() => {
    return (Array.isArray(items) ? items : []).map(
      normalizeItem
    );
  }, [items]);

  const count = data.length;

  /* =========================================================
     REFS
  ========================================================= */

  const rootRef = useRef(null);

  const cardRefs = useRef([]);

  const overlayRefs = useRef([]);

  const posRef = useRef(0);

  const focusRef = useRef(0);

  const tweenRef = useRef(null);

  const scaleRef = useRef(1);

  const cfgRef = useRef({});

  const onChangeRef = useRef(onChange);

  const dragRef = useRef(null);

  const wheelTimerRef = useRef(null);

  const autoTimerRef = useRef(null);

  const reducedRef = useRef(false);

  /* =========================================================
     STATE
  ========================================================= */

  const [active, setActive] = useState(0);

  /* =========================================================
     UPDATE CONFIG
  ========================================================= */

  useEffect(() => {
    onChangeRef.current = onChange;

    cfgRef.current = {
      count,

      depth,

      spread,

      tilt,

      tiltDirection,

      visibleCards,

      falloff,

      blur,

      duration,

      ease,

      loop,

      cardWidth,

      autoplayDelay,
    };
  }, [
    onChange,

    count,

    depth,

    spread,

    tilt,

    tiltDirection,

    visibleCards,

    falloff,

    blur,

    duration,

    ease,

    loop,

    cardWidth,

    autoplayDelay,
  ]);

  /* =========================================================
     LAYOUT
  ========================================================= */

  const layout = useCallback((pos) => {
    const cfg = cfgRef.current;

    const n = cfg.count;

    if (!n) {
      return;
    }

    const direction =
      cfg.tiltDirection === 'left'
        ? -1
        : 1;

    const scale = scaleRef.current;

    for (let i = 0; i < n; i += 1) {
      const el = cardRefs.current[i];

      if (!el) {
        continue;
      }

      let distance = i - pos;

      if (cfg.loop && n > 1) {
        distance =
          ((distance % n) + n) %
          n;

        if (distance > n / 2) {
          distance -= n;
        }
      }

      const depthIndex =
        Math.max(0, distance);

      const absoluteDistance =
        Math.abs(distance);

      const isVisible =
        absoluteDistance <=
        cfg.visibleCards + 0.5;

      const translateZ =
        -cfg.depth * distance;

      const translateX =
        direction *
        cfg.spread *
        distance;

      const rotateY =
        direction *
        cfg.tilt *
        clamp(distance, 0, 1);

      let opacity =
        distance < 0
          ? Math.max(
              0,
              1 + distance
            )
          : 1;

      if (!isVisible) {
        opacity = 0;
      }

      const brightness =
        Math.max(
          0.15,

          1 -
            depthIndex *
              cfg.falloff
        );

      const blurPx =
        cfg.blur > 0
          ? Math.min(
              cfg.blur,

              (depthIndex /
                Math.max(
                  1,
                  cfg.visibleCards
                )) *
                cfg.blur
            )
          : 0;

      const zIndex =
        Math.round(
          2000 -
            distance * 20
        );

      el.style.transform =
        `translate(-50%, -50%) ` +
        `scale(${scale}) ` +
        `translateX(${translateX.toFixed(2)}px) ` +
        `translateZ(${translateZ.toFixed(2)}px) ` +
        `rotateY(${rotateY.toFixed(3)}deg)`;

      el.style.opacity =
        opacity.toFixed(3);

      el.style.filter =
        `brightness(${brightness.toFixed(3)}) ` +
        `blur(${blurPx.toFixed(2)}px)`;

      el.style.zIndex =
        String(zIndex);

      el.style.pointerEvents =
        isVisible &&
        opacity > 0.05
          ? 'auto'
          : 'none';

      const overlay =
        overlayRefs.current[i];

      if (overlay) {
        overlay.style.opacity =
          clamp(
            depthIndex *
              cfg.falloff *
              1.25,

            0,

            0.86
          ).toFixed(3);
      }
    }
  }, []);

  /* =========================================================
     NOTIFY
  ========================================================= */

  const notify = useCallback(
    (index) => {
      setActive(index);

      onChangeRef.current?.(
        index,

        data[index]
      );
    },

    [data]
  );

  /* =========================================================
     TWEEN
  ========================================================= */

  const tweenTo = useCallback(
    (
      target,

      animate
    ) => {
      tweenRef.current?.kill();

      const cfg =
        cfgRef.current;

      const proxy = {
        p: posRef.current,
      };

      const durationSeconds =
        animate &&
        !reducedRef.current
          ? cfg.duration /
            1000
          : 0;

      tweenRef.current =
        gsap.to(
          proxy,

          {
            p: target,

            duration:
              durationSeconds,

            ease:
              cfg.ease,

            onUpdate: () => {
              posRef.current =
                proxy.p;

              layout(
                proxy.p
              );
            },

            onComplete: () => {
              const n =
                cfg.count;

              if (n > 0) {
                posRef.current =
                  ((posRef.current %
                    n) +
                    n) %
                  n;
              }

              layout(
                posRef.current
              );
            },
          }
        );
    },

    [layout]
  );

  /* =========================================================
     SET FOCUS
  ========================================================= */

  const setFocus =
    useCallback(
      (
        rawIndex,

        animate = true
      ) => {
        const cfg =
          cfgRef.current;

        const n =
          cfg.count;

        if (!n) {
          return;
        }

        const index =
          cfg.loop
            ? ((rawIndex %
                n) +
                n) %
              n
            : clamp(
                rawIndex,

                0,

                n - 1
              );

        let delta =
          index -
          posRef.current;

        if (
          cfg.loop &&
          n > 1
        ) {
          delta =
            ((delta %
              n) +
              n) %
            n;

          if (
            delta >
            n / 2
          ) {
            delta -= n;
          }
        }

        tweenTo(
          posRef.current +
            delta,

          animate
        );

        if (
          index !==
          focusRef.current
        ) {
          focusRef.current =
            index;

          notify(index);
        }
      },

      [
        notify,
        tweenTo,
      ]
    );

  /* =========================================================
     NAVIGATE
  ========================================================= */

  const navigateBy =
    useCallback(
      (step) => {
        setFocus(
          focusRef.current +
            step,

          true
        );
      },

      [setFocus]
    );

  /* =========================================================
     RESPONSIVE RESIZE
  ========================================================= */

  useEffect(() => {
    const root =
      rootRef.current;

    if (!root) {
      return;
    }

    const ro =
      new ResizeObserver(
        (entries) => {
          const width =
            entries[0]
              .contentRect
              .width;

          const cfg =
            cfgRef.current;

          const needed =
            cfg.cardWidth +
            Math.abs(
              cfg.spread
            ) *
              2 +
            120;

          scaleRef.current =
            clamp(
              width /
                needed,

              0.4,

              1
            );

          layout(
            posRef.current
          );
        }
      );

    ro.observe(root);

    return () =>
      ro.disconnect();
  }, [layout]);

  /* =========================================================
     MOUSE WHEEL
  ========================================================= */

  useEffect(() => {
    const root =
      rootRef.current;

    if (!root) {
      return;
    }

    const onWheel = (
      event
    ) => {
      const cfg =
        cfgRef.current;

      if (
        cfg.count < 2
      ) {
        return;
      }

      event.preventDefault();

      tweenRef.current?.kill();

      const raw =
        Math.abs(
          event.deltaX
        ) >
        Math.abs(
          event.deltaY
        )
          ? event.deltaX
          : event.deltaY;

      const delta =
        event.deltaMode ===
        1
          ? raw * 24
          : raw;

      const step =
        clamp(
          delta /
            (cfg.cardWidth *
              0.9),

          -0.6,

          0.6
        );

      posRef.current +=
        step;

      layout(
        posRef.current
      );

      if (
        wheelTimerRef.current
      ) {
        clearTimeout(
          wheelTimerRef.current
        );
      }

      wheelTimerRef.current =
        window.setTimeout(
          () => {
            setFocus(
              Math.round(
                posRef.current
              ),

              true
            );
          },

          130
        );
    };

    root.addEventListener(
      'wheel',

      onWheel,

      {
        passive: false,
      }
    );

    return () => {
      root.removeEventListener(
        'wheel',

        onWheel
      );

      if (
        wheelTimerRef.current
      ) {
        clearTimeout(
          wheelTimerRef.current
        );
      }
    };
  }, [
    layout,

    setFocus,
  ]);

  /* =========================================================
     POINTER DOWN
  ========================================================= */

  const onPointerDown =
    useCallback(
      (event) => {
        const cfg =
          cfgRef.current;

        if (
          cfg.count < 2
        ) {
          return;
        }

        tweenRef.current?.kill();

        dragRef.current = {
          x: event.clientX,

          startPos:
            posRef.current,

          lastX:
            event.clientX,

          lastT:
            performance.now(),

          v: 0,

          moved: false,

          id:
            event.pointerId,
        };
      },

      []
    );

  /* =========================================================
     POINTER MOVE
  ========================================================= */

  const onPointerMove =
    useCallback(
      (event) => {
        const drag =
          dragRef.current;

        if (!drag) {
          return;
        }

        const cfg =
          cfgRef.current;

        const stepPx =
          Math.max(
            cfg.cardWidth *
              0.55 *
              scaleRef.current,

            40
          );

        const dx =
          event.clientX -
          drag.x;

        if (
          !drag.moved &&
          Math.abs(dx) >
            4
        ) {
          drag.moved =
            true;

          rootRef.current?.setPointerCapture(
            drag.id
          );
        }

        if (
          !drag.moved
        ) {
          return;
        }

        const now =
          performance.now();

        const dt =
          Math.max(
            now -
              drag.lastT,

            1
          );

        drag.v =
          (event.clientX -
            drag.lastX) /
          dt;

        drag.lastX =
          event.clientX;

        drag.lastT =
          now;

        posRef.current =
          drag.startPos -
          dx /
            stepPx;

        layout(
          posRef.current
        );
      },

      [layout]
    );

  /* =========================================================
     POINTER END
  ========================================================= */

  const onPointerEnd =
    useCallback(
      () => {
        const drag =
          dragRef.current;

        if (!drag) {
          return;
        }

        dragRef.current =
          null;

        if (
          !drag.moved
        ) {
          return;
        }

        const cfg =
          cfgRef.current;

        const stepPx =
          Math.max(
            cfg.cardWidth *
              0.55 *
              scaleRef.current,

            40
          );

        const projected =
          posRef.current -
          (drag.v *
            180) /
            stepPx;

        setFocus(
          Math.round(
            projected
          ),

          true
        );
      },

      [setFocus]
    );

  /* =========================================================
     KEYBOARD
  ========================================================= */

  const onKeyDown =
    useCallback(
      (event) => {
        if (
          event.key ===
          'ArrowLeft'
        ) {
          event.preventDefault();

          navigateBy(-1);
        } else if (
          event.key ===
          'ArrowRight'
        ) {
          event.preventDefault();

          navigateBy(1);
        }
      },

      [navigateBy]
    );

  /* =========================================================
     CARD CLICK
  ========================================================= */

  const onCardClick =
    useCallback(
      (index) => {
        if (
          dragRef.current
            ?.moved
        ) {
          return;
        }

        setFocus(
          index,

          true
        );
      },

      [setFocus]
    );

  /* =========================================================
     AUTOPLAY
  ========================================================= */

  useEffect(() => {
    reducedRef.current =
      typeof window !==
        'undefined' &&
      window
        .matchMedia(
          '(prefers-reduced-motion: reduce)'
        )
        .matches;

    if (
      !autoplay ||
      reducedRef.current ||
      count < 2
    ) {
      return;
    }

    const root =
      rootRef.current;

    let hovered =
      false;

    let focused =
      false;

    const stop = () => {
      if (
        autoTimerRef.current
      ) {
        clearInterval(
          autoTimerRef.current
        );
      }

      autoTimerRef.current =
        null;
    };

    const start = () => {
      stop();

      autoTimerRef.current =
        window.setInterval(
          () => {
            if (
              !hovered &&
              !focused
            ) {
              navigateBy(1);
            }
          },

          Math.max(
            cfgRef.current
              .autoplayDelay,

            600
          )
        );
    };

    const onEnter = () => {
      hovered = true;
    };

    const onLeave = () => {
      hovered = false;
    };

    const onFocusIn = () => {
      focused = true;
    };

    const onFocusOut = () => {
      focused = false;
    };

    root?.addEventListener(
      'mouseenter',

      onEnter
    );

    root?.addEventListener(
      'mouseleave',

      onLeave
    );

    root?.addEventListener(
      'focusin',

      onFocusIn
    );

    root?.addEventListener(
      'focusout',

      onFocusOut
    );

    start();

    return () => {
      stop();

      root?.removeEventListener(
        'mouseenter',

        onEnter
      );

      root?.removeEventListener(
        'mouseleave',

        onLeave
      );

      root?.removeEventListener(
        'focusin',

        onFocusIn
      );

      root?.removeEventListener(
        'focusout',

        onFocusOut
      );
    };
  }, [
    autoplay,

    count,

    navigateBy,
  ]);

  /* =========================================================
     LAYOUT UPDATE
  ========================================================= */

  useEffect(() => {
    layout(
      posRef.current
    );
  }, [
    layout,

    depth,

    spread,

    tilt,

    tiltDirection,

    visibleCards,

    falloff,

    blur,

    cardWidth,

    cardHeight,

    radius,

    count,
  ]);

  /* =========================================================
     CLEANUP
  ========================================================= */

  useEffect(
    () => () => {
      tweenRef.current?.kill();

      if (
        wheelTimerRef.current
      ) {
        clearTimeout(
          wheelTimerRef.current
        );
      }

      if (
        autoTimerRef.current
      ) {
        clearInterval(
          autoTimerRef.current
        );
      }
    },

    []
  );

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div
      ref={rootRef}
      className={`depth-carousel ${className}`.trim()}
      style={{
        '--dc-perspective':
          `${perspective}px`,
      }}
      role="group"
      aria-roledescription="carousel"
      aria-label="Depth carousel"
      tabIndex={0}
      onPointerDown={
        onPointerDown
      }
      onPointerMove={
        onPointerMove
      }
      onPointerUp={
        onPointerEnd
      }
      onPointerCancel={
        onPointerEnd
      }
      onKeyDown={
        onKeyDown
      }
    >
      {/* =====================================================
          CAROUSEL STAGE
      ===================================================== */}

      <div className="depth-carousel__stage">
        {data.map(
          (
            item,

            index
          ) => {
            const showImage =
              hasValidImage(
                item
              );

            return (
              <div
                key={
                  item?.id ??
                  index
                }
                className="depth-carousel__card"
                ref={(
                  element
                ) => {
                  cardRefs.current[
                    index
                  ] =
                    element;
                }}
                style={{
                  width:
                    cardWidth,

                  height:
                    cardHeight,

                  borderRadius:
                    radius,

                  background:
                    item?.color ||
                    '#0b1120',
                }}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                aria-hidden={
                  active !==
                  index
                }
                onClick={() =>
                  onCardClick(
                    index
                  )
                }
              >
                {/* ============================================
                    IMAGE PROJECT
                ============================================ */}

                {showImage ? (
                  <img
                    className="depth-carousel__img"
                    src={
                      item.image
                    }
                    alt={
                      item.alt ||
                      item.title ||
                      ''
                    }
                    draggable={
                      false
                    }
                    style={{
                      objectFit:
                        item.imageFit ||
                        'cover',

                      objectPosition:
                        item.imagePosition ||
                        'center center',

                      transform:
                        `scale(${item.imageScale || 1})`,
                    }}
                  />
                ) : (
                  /* ==========================================
                     PROJECT WITHOUT IMAGE
                  ========================================== */

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      p-8
                      text-center
                    "
                  >
                    {/* Background glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-40
                        w-40
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-emerald-400/10
                        blur-3xl
                      "
                    />

                    {/* Text */}

                    <div className="relative z-10">
                      {item?.category && (
                        <p
                          className="
                            mb-3
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-emerald-300
                          "
                        >
                          {
                            item.category
                          }
                        </p>
                      )}

                      <h3
                        className="
                          text-xl
                          font-semibold
                          leading-tight
                          tracking-tight
                          text-slate-100
                          sm:text-2xl
                        "
                      >
                        {item?.title ||
                          'Project'}
                      </h3>

                      <div
                        className="
                          mx-auto
                          mt-4
                          h-px
                          w-12
                          bg-emerald-400/50
                        "
                      />

                      <p
                        className="
                          mt-4
                          text-xs
                          text-slate-400
                        "
                      >
                        Project
                        Preview
                      </p>
                    </div>
                  </div>
                )}

                {/* ============================================
                    DEPTH TINT
                ============================================ */}

                <span
                  className="depth-carousel__tint"
                  ref={(
                    element
                  ) => {
                    overlayRefs.current[
                      index
                    ] =
                      element;
                  }}
                  style={{
                    background:
                      tint,
                  }}
                />
              </div>
            );
          }
        )}
      </div>

      {/* =====================================================
          PREVIOUS / NEXT CONTROLS
      ===================================================== */}

      {showControls &&
        count > 1 && (
          <>
            <button
              type="button"
              className="
                depth-carousel__arrow
                depth-carousel__arrow--prev
              "
              aria-label="Previous slide"
              onClick={(
                event
              ) => {
                event.stopPropagation();

                navigateBy(
                  -1
                );
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="
                depth-carousel__arrow
                depth-carousel__arrow--next
              "
              aria-label="Next slide"
              onClick={(
                event
              ) => {
                event.stopPropagation();

                navigateBy(
                  1
                );
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

      {/* =====================================================
          INDICATORS
      ===================================================== */}

      {showIndicators &&
        count > 1 && (
          <div
            className="depth-carousel__dots"
            role="tablist"
            aria-label="Slides"
          >
            {data.map(
              (
                item,

                index
              ) => (
                <button
                  key={
                    item?.id ??
                    index
                  }
                  type="button"
                  role="tab"
                  aria-selected={
                    active ===
                    index
                  }
                  aria-label={`Go to slide ${index + 1}`}
                  className={
                    `depth-carousel__dot${
                      active ===
                      index
                        ? ' is-active'
                        : ''
                    }`
                  }
                  onClick={(
                    event
                  ) => {
                    event.stopPropagation();

                    setFocus(
                      index,

                      true
                    );
                  }}
                />
              )
            )}
          </div>
        )}
    </div>
  );
};

export default DepthCarousel;