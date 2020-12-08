export const keyDownHandler = (event: React.KeyboardEvent, dateObjectDates: number): void => {
    event.preventDefault();
    const eventTarget = event.target as HTMLElement
    const currentElementId = eventTarget.id.slice(-2) as string;

    const sliceChecker = (elementId: string): number => {
        if (elementId[0] === "-") {
            return +elementId.slice(-1)
        } else {
            return +elementId
        }
    }

    switch (event.key) {
        case "ArrowLeft":
            if ((document.getElementById(`button-${sliceChecker(currentElementId) - 1}`) as HTMLButtonElement) === null) {
                break;
            } else {
                (document.getElementById(`button-${sliceChecker(currentElementId) - 1}`) as HTMLButtonElement).focus();
                break;
            }

        case "ArrowRight":
            if ((document.getElementById(`button-${sliceChecker(currentElementId) + 1}`) as HTMLButtonElement) === null) {
                break;
            } else {
                (document.getElementById(`button-${sliceChecker(currentElementId) + 1}`) as HTMLButtonElement).focus();
                break;
            }

        case "ArrowDown":
            if ((document.getElementById(`button-${sliceChecker(currentElementId) + 7}`) as HTMLButtonElement) === null) {
                if (eventTarget.parentElement?.parentElement?.nextElementSibling?.firstElementChild?.firstElementChild as HTMLButtonElement) {
                    (eventTarget.parentElement?.parentElement?.nextElementSibling?.firstElementChild?.firstElementChild as HTMLButtonElement).focus();
                    break;
                } else {
                    break;
                }
            } else {
                (document.getElementById(`button-${sliceChecker(currentElementId) + 7}`) as HTMLButtonElement).focus();
                break;
            }

        case "ArrowUp":
            if ((document.getElementById(`button-${sliceChecker(currentElementId) - 7}`) as HTMLButtonElement) === null) {
                (document.getElementById("button-1") as HTMLButtonElement).focus();
                break;
            } else {
                (document.getElementById(`button-${sliceChecker(currentElementId) - 7}`) as HTMLButtonElement).focus();
                break;
            }

        case "Enter":
            eventTarget.click();
            break;

        case "Spacebar":
            eventTarget.click();
            break;

        case " ":
            eventTarget.click();
            break;

        case "Home":
            (document.getElementById("button-1") as HTMLButtonElement).focus();
            break;

        case "End":
            (document.getElementById(`button-${dateObjectDates}`) as HTMLButtonElement).focus();
            break;

        case "Escape":
            //do something after selection or close the calendar
            break;
    }
}