# Attributes Overview

## What are attributes?
Attributes are a way of tagging or labeling pieces of code above a `[class, property, function, method]` in a script to indicate special behaviour.

## Attribute syntax
Attributes must be surrounded by square brackets. You can write them either before or above pieces of code. You can add attributes to many different pieces of code, including fields, classes and methods. You can also include parameters that affect how attributes behave.
Here are some examples of attributes added to code.

### Field with attribute
```csharp
[Range(0f, 10f)]
public float speed = 5f;
```

```csharp
[SerializeField] private float speed = 5f;
```

### Class with an attribute
```csharp
[CustomEditor(typeof(PlayerScript))]
public class PlayerScriptEditor : Editor
{
   //…
} 
```

### Method with an attribute
```csharp
[InitializeOnLoadMethod]
static void Initialization ()
{
   // …
}
```




