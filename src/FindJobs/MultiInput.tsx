"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {  } from "@tabler/icons-react"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "java",
    label: "Java",
  },
  {
    value: "react.js",
    label: "React.js",
  },
  {
    value: "Python",
    label: "Python",
  },
  {
    value: "sql",
    label: "SQL",
  },
  
]

const MultiInput = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>

        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" w-full justify-between "
        >
          <div className="bg-berry-300 p-2">
            <Search className="w-7 h-7 text-berry-500  " />
          </div>
          
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select skill..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
        
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default MultiInput;