import moment from "moment";

interface IClickedDate {
    date?: number;
    month?: number;
    year?: number;
}

interface IIsClicked {
    buttonId: string,
    selected: boolean
}

interface IIsClicked {
    buttonId: string,
    selected: boolean
}

const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    dateFormat: string,
    validation: boolean,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setClickedDate: React.Dispatch<React.SetStateAction<IClickedDate>>,
    setIsClicked: React.Dispatch<React.SetStateAction<IIsClicked>>): void => {

    const value = event.target.value;
    setValue(value);

    const errorDefinition = (inValidAt: number): string => {
        let error;
        switch (inValidAt) {
            case 1:
                error = "month!"
                break;
            case 2:
                error = "day!"
                break;
            case 3:
                error = "Please check date format!"
            default:
                error = "Date doesn't match format!"
        }
        return error;
    };

    const dateValidator = (targetValue: string, dateFormat: string) => {
        const dateFormatCheck = moment(targetValue, dateFormat, true);
        const dateIsValid = dateFormatCheck.isValid();
        if (dateIsValid === true) {
            return true;
        }
        else {
            const invalidAt = dateFormatCheck.invalidAt();
            const errorNote = "Please check entered ";
            validation ? setErrorMessage(errorNote + errorDefinition(invalidAt)) : null;
        }
    };

    const dateIdentifier = (value: string, dateFormat: string) => {
        const format = dateFormat.toUpperCase();
        const dateIndex = [];
        const monthIndex = [];
        const yearIndex = [];

        for (let i = 0; i < format.length; i++) {
            if (dateFormat[i] === "D") { dateIndex.push(i) }
            if (dateFormat[i] === "M") { monthIndex.push(i) }
            if (dateFormat[i] === "Y") { yearIndex.push(i) }
        }
        const date = value.slice(dateIndex[0], dateIndex[1] + 1);
        const month = value.slice(monthIndex[0], monthIndex[1] + 1);
        const year = value.slice(yearIndex[0], yearIndex[yearIndex.length - 1] + 1);

        const yearChecker = (year: string) => {
            if (year.length < 4) {
                return `20${year}`
            } else {
                return year;
            }
        };

        setClickedDate({ year: +yearChecker(year), month: +month, date: +date });
        setIsClicked({ buttonId: +date < 10 ? `button-${date.charAt(1)}` : `button-${date}`, selected: true });
    }

    if (value.length === 10 || value.length === 8) {
        setErrorMessage("");

        const validataionChecker = dateValidator(value, dateFormat);
        if (validataionChecker === true) {
            dateIdentifier(value, dateFormat);
        }
    }

    if (value.length > dateFormat.length) {
        validation && setErrorMessage(errorDefinition(3));
    }

};

export default onChangeHandler;