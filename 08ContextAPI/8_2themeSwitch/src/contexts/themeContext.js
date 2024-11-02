import { useContext ,createContext} from "react";
export const themeContext=createContext({
    themeMode:"dark",
    lightTheme:()=>{},
    darkTheme:()=>{},
})

export const ThemeProvider=themeContext.Provider;
function useTheme(){
    return useContext(themeContext);
}
export default useTheme