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
      <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 overflow-y-scroll rounded-md p-4">
        {themes.map((theme) => (
          <ScaleAnimation key={theme} scaleFactor={1.1}>
            <div
              onClick={() => handleSelect(theme)}
              className={`bg-${theme}-500 h-10 w-10 cursor-pointer rounded-lg ${
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
