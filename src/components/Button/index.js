import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

export function Button( {variant = "primary"} ){
    return(
         <TouchableOpacity 
            onPress={ () => alert('Hello world')}
            style={[
                    styles.button, 
                    variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary
                ]}
        >
        <Text style={styles.buttonText}>Click here</Text>
    </TouchableOpacity>
    )
}