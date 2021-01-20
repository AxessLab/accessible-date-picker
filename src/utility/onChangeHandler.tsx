import moment from "moment";

const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, dateFormat: string, setValue: any, setClickedDate: any, setIsClicked: any): void => {
    const value = event.target.value;
    setValue(value);
    let date = "";
    let month = "";
    let year = "";
    let dateFormatCheck;
    let dateIsValid;

    if (value.length === 10) {
        if (dateFormat === "YYYY/MM/DD") {
            dateFormatCheck = moment(value, 'YYYY/MM/DD', true);
            dateIsValid = dateFormatCheck.isValid();

            if (dateIsValid === true) {
                date = value.charAt(8) + value.charAt(9);
                month = value.charAt(5) + value.charAt(6);
                year = value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3);
            }
            else {
                //give warning
            }
        }

        if (dateFormat === "DD/MM/YYYY") {
            dateFormatCheck = moment(value, "DD/MM/YYYY", true);
            dateIsValid = dateFormatCheck.isValid();

            if (dateIsValid === true) {
                date = value.charAt(0) + value.charAt(1);
                month = value.charAt(3) + value.charAt(4);
                year = value.charAt(6) + value.charAt(7) + value.charAt(8) + value.charAt(9);
            } else {
                //give warning
            }
        }

        if (dateFormat === "MM/DD/YYYY") {
            dateFormatCheck = moment(value, "MM/DD/YYYY", true);
            dateIsValid = dateFormatCheck.isValid();

            if (dateIsValid === true) {
                month = value.charAt(0) + value.charAt(1);
                date = value.charAt(3) + value.charAt(4);
                year = value.charAt(6) + value.charAt(7) + value.charAt(8) + value.charAt(9);
            } else {
                //give warning
            }
        }

        setClickedDate({ year: +year, month: +month, date: +date });
        setIsClicked({ buttonId: +date < 10 ? `button-${date.charAt(1)}` : `button-${date}`, selected: true });
    }
};

export default onChangeHandler;