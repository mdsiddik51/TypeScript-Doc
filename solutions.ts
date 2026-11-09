const multiplyValue = (value: number, multiplier?: number) => {
    if (typeof multiplier === "undefined") {
        return value * 2;
    };
    return value * multiplier;
}

const processInput = (values: string | number | boolean) => {
    if (typeof values === "string") {
        return values.trim().toLowerCase();
    } else if (typeof values === "number") {
        return values * 10;
    } else {
        if (values === true) {
            return "Active";
        };
        return "Inactive";
    }
}

const formatCoordinate = (value: readonly [number, number, string]) => {
    const [latitude, longitude, locationName] = value;
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat();
};



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
};

const getPopularCourses = (Course: Course[], minStudents: number) => {
    let result = [];
    for (let data in Course) {
        if (Course[data].students > minStudents && Course[data].isPublished === true) {
            result.push(Course[data]);
        }
    }
    return result;
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    let result: T[] = [];
    return items.map((item) => item[key])
}


class Employee {
    constructor(protected name: string, private baseSalary: number) { };
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    };
};

class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary)
    };

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name} `
    };
};

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((data, error) => {
        if (age >= 18) {
            setTimeout(() => {
                data("Access Granted");
            }, 1000);
        } else if(age < 18) {
            error(new Error("Access Denied: Must be 18 or older"));
        }
    });
};


