
interface DotProps {
  color?: string
  size?: string
  animated?: boolean
}

export function Dot({ color = "bg-green-500", size = "h-2 w-2", animated = false }: DotProps) {
  return (
    <span
      className={`inline-block rounded-full ${color} ${size} ${
        animated ? "animate-ping opacity-75" : ""
      }`}
    />
  )
}
