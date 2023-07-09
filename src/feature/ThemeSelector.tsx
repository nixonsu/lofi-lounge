import { Color } from '@root/models/color'
import Popup from '@components/Popup'
import ScaleAnimation from '@components/animations/ScaleAnimation'

interface Props {
  handleSelect: (theme: Color) => void
  onClose: () => void
  currentTheme: Color
}

const themes: Color[] = ['green', 'purple', 'yellow', 'blue', 'pink', 'gray']

const ThemeSelector = ({ handleSelect, onClose, currentTheme }: Props) => {
  return (
    <Popup title="THEME" onClose={onClose}>
      <div className="grid gap-x-4 gap-y-4 p-4 grid-cols-3 grid-rows-2 overflow-y-scroll rounded-md">
        {themes.map((theme) => (
          <ScaleAnimation key={theme} scaleFactor={1.1}>
            <div
              onClick={() => handleSelect(theme)}
              className={`bg-${theme}-500 w-10 h-10 rounded-lg cursor-pointer ${
                currentTheme === theme ? 'opacity-100' : 'opacity-50'
              }`}
            />
          </ScaleAnimation>
        ))}
      </div>
    </Popup>
  )
}

export default ThemeSelector
