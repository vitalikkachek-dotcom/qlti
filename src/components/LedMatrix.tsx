import { useEffect, useRef } from 'react'

/**
 * Animated LED video wall rendered on canvas:
 * a grid of discrete emitters displaying a slowly drifting
 * blue/violet plasma "broadcast", with visible pixel pitch.
 */
export default function LedMatrix({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const PITCH = 14 // distance between emitters, px

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (time: number) => {
      const t = time * 0.00028
      ctx.fillStyle = '#050508'
      ctx.fillRect(0, 0, w, h)

      const cols = Math.ceil(w / PITCH)
      const rows = Math.ceil(h / PITCH)

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const nx = x / cols
          const ny = y / rows
          // layered plasma field
          const v =
            Math.sin(nx * 6.2 + t * 2.1) * 0.5 +
            Math.sin(ny * 4.4 - t * 1.6) * 0.35 +
            Math.sin((nx + ny) * 5.0 + t * 2.6) * 0.35 +
            Math.sin(Math.hypot(nx - 0.62, ny - 0.42) * 9.0 - t * 3.0) * 0.55
          const n = (v + 1.75) / 3.5 // 0..1

          // electric blue ramp with occasional lime highlight
          const r = Math.floor(10 + 46 * n * n)
          const g = Math.floor(8 + 44 * n)
          const b = Math.floor(24 + 231 * Math.pow(n, 1.4))
          const alpha = 0.3 + 0.7 * n

          const cx = x * PITCH + PITCH / 2
          const cy = y * PITCH + PITCH / 2
          const rad = PITCH * 0.22 + n * PITCH * 0.16

          ctx.beginPath()
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`
          ctx.arc(cx, cy, rad, 0, Math.PI * 2)
          ctx.fill()

          // bloom for bright cells
          if (n > 0.82) {
            ctx.beginPath()
            ctx.fillStyle = `rgba(120,120,255,${((n - 0.82) * 1.6).toFixed(3)})`
            ctx.arc(cx, cy, rad * 2.4, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
