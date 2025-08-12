import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 rounded-full bg-chess-50 shadow-md px-6 py-3 w-full mx-auto">

      {/* Search Input with Icon */}
      <div className="flex items-center gap-1 flex-1 text-chess-400">
        <Search className="w-7 h-7 text-berry-500" />
        <Input
          type="text"
          placeholder="Enter skills"
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-chess-400 text-chess-950"
        />
      </div>

      {/* Divider */}
      <div className="w-[1px] h-6 bg-berry-500" />

      {/* Experience Dropdown */}
      <div className="flex items-center">
        <Select>
          <SelectTrigger className="w-40 border-none focus:ring-0 focus:ring-offset-0 text-sm text-chess-400 ">
            <SelectValue placeholder="Experience" />
          </SelectTrigger>
          <SelectContent className=" border-none bg-berry-100">
            <SelectItem value="0-1">0-1 years</SelectItem>
            <SelectItem value="1-3">1-3 years</SelectItem>
            <SelectItem value="3-5">3-5 years</SelectItem>
            <SelectItem value="5+">5+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-6 bg-berry-500" />

      {/* Location Input */}
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Location"
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-chess-400"
        />
      </div>

      {/* Search Button */}
      <div>
        <Button className="rounded-full bg-berry-600 hover:bg-berry-900 text-chess-50 font-semibold px-7 py-6 text-md">
          Search
        </Button>
      </div>
     
    </div>
  )
}
