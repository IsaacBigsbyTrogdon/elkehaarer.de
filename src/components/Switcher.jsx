import React from "react"

const myThemes = [
  {
    id: "theme-yellow",
    name: "Yellow",
  },
  {
    id: "theme-default",
    name: "Default",
  },
]

const ThemePicker = ({ theme, switchTheme }) => {
  if (theme) {
    return (
      <div>
        {myThemes.map((item, index) => {
          const nextTheme =
            myThemes.length - 1 === index
              ? myThemes[0].id
              : myThemes[index + 1].id

          return item.id === theme ? (
            <div key={item.id} className={item.id}>
              <button
                aria-label={`Theme ${item.name}`}
                onClick={() => switchTheme(nextTheme)}
              >
                {item.name}
              </button>
            </div>
          ) : null
        })}
      </div>
    )
  }
  return null
}

export default ThemePicker
