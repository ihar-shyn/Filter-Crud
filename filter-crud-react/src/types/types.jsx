export const criteriaTypes = [
    {id: "AMOUNT", name: "Amount"},
    {id: "TITLE", name: "Title"},
    {id: "DATE", name: "Date"}
];

export const criteriaConditionTypes = new Map(
    [
        ["AMOUNT",
            [
                {id: "MORE", label: "More"},
                {id: "LESS", label: "Less"},
                {id: "EQUAL", label: "Equal"}
            ]
        ],
        ["TITLE",
            [
                {id: "START_WITH", label: "Starts with"},
                {id: "END_WITH", label: "Ends with"},
                {id: "EQUALS", label: "Equals"}
            ]
        ],
        ["DATE",
            [
                {id: "BEFORE", label: "Before"},
                {id: "EQUALS", label: "Equals"},
                {id: "AFTER", label: "After"}
            ]
        ]
    ]
);

export function getDefaultRowByType(type) {
    if (type === "AMOUNT") {
        return {type: "AMOUNT", condition: "MORE", val: 0}
    }
    if (type === "TITLE") {
        return {type: "TITLE", condition: "START_WITH", val: ""}
    }
    if (type === "DATE") {
        return {type: "DATE", condition: "BEFORE", val: ""}
    }

    throw new Error('Unknown type!');
}

export function getDefaultRow(type) {
    return {type: "AMOUNT", condition: "MORE", val: 0}
}
