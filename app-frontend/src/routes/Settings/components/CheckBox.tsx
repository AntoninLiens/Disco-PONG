import React, {useState} from "react";
import "./CheckBox.css";

interface CheckBoxProps {
    label: string;
    ischecked?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, ischecked = false }) => {
    const [checked, setChecked] = useState(ischecked);

    return (
        <div className="PixelArtCheckbox">
            <label>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                <span className="PixelArtCheckbox-checkmark">{checked && <span className="PixelArtCheckbox-checkmark-icon"></span>}</span>
                {label}
            </label>
        </div>
    );
}

export default CheckBox;