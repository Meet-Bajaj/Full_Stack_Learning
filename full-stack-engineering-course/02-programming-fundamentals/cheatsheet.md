# Module 02: Cheatsheet

## Data Types
- **Number**: Integers (`42`), Decimals/Floats (`3.14`)
- **String**: Text (`"Hello"`, `'World'`)
- **Boolean**: Truth values (`true`, `false`)
- **Null / Undefined**: Absence of value.

## Operators
- **Arithmetic**: `+`, `-`, `*`, `/`, `%` (modulo/remainder)
- **Comparison**: `==`, `!=`, `<`, `>`, `<=`, `>=` (Result in Booleans)
- **Logical**: `&&` (AND), `||` (OR), `!` (NOT)

## Control Flow
```pseudocode
IF condition THEN
    // ...
ELSE IF other_condition THEN
    // ...
ELSE
    // ...
END IF
```

## Loops
- **For**: Use when you know exact iterations. `FOR i = 0 TO 10 DO`
- **While**: Use for conditional iterations. `WHILE condition DO`
- **Break**: Stops loop entirely.
- **Continue**: Skips current iteration.

## Functions
```pseudocode
FUNCTION name(parameter1, parameter2)
    // Code block
    RETURN result
END FUNCTION
```

## Arrays
Ordered lists, zero-indexed.
- `arr = ["A", "B", "C"]`
- `arr[0]` is `"A"`

## Objects / Dictionaries
Key-value pairs.
- `obj = { name: "John", age: 30 }`
- `obj.name` is `"John"`

## Error Handling
```pseudocode
TRY
    // Risky code
CATCH error
    // Handle error gracefully
FINALLY
    // Always runs
END TRY
```
