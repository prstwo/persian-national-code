function useTestNationalCode(nationalCode) {
    if (String(nationalCode).toLowerCase().match(/^[0-9]{10}$/)) {
        let nationalCodeString = nationalCode.toString();
        let nationalCodeArray = nationalCodeString.split('');
        switch (nationalCodeString) {
            case "0000000000":
            case "1111111111":
            case "22222222222":
            case "33333333333":
            case "4444444444":
            case "5555555555":
            case "6666666666":
            case "7777777777":
            case "8888888888":
            case "9999999999":
                return false
        }
        let num9 = nationalCodeArray[9];
        console.log("num9")
        console.log(num9)
        let sumNationalCode = (nationalCodeArray[0] * 10) + (nationalCodeArray[1] * 9) + (nationalCodeArray[2] * 8) + (nationalCodeArray[3] * 7) + (nationalCodeArray[4] * 6) + (nationalCodeArray[5] * 5) + (nationalCodeArray[6] * 4) + (nationalCodeArray[7] * 3) + (nationalCodeArray[8] * 2);
        let divideNationalCode = Math.floor(sumNationalCode % 11);
        console.log(divideNationalCode)
        if (divideNationalCode < 2 && num9 == divideNationalCode || divideNationalCode >= 2 && num9 == Math.abs(11 - divideNationalCode)) {
            return true
        }
        else {
            return false
        }

    }
    else {
        return false
    }



}
