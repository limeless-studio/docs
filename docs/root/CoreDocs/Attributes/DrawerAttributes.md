# Drawer Attributes
Provide special draw options to serialized fields.
A field can have only one DrawerAttribute. If a field has more than one, only the bottom one will be used.

## AnimatorParam
Select an Animator paramater via dropdown interface.

```csharp
public class SampleComponent : MonoBehaviour
{
	public Animator someAnimator;

	[AnimatorParam("someAnimator")]
	public int paramHash;

	[AnimatorParam("someAnimator")]
	public string paramName;
}
```

![inspector](/assets/core/AnimatorParam.png)

## Button
A method can be marked as a button. A button appears in the inspector and executes the method if clicked.
Works both with instance and static methods.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Button]
	private void MethodOne() { }

	[Button("Button Text")]
	private void MethodTwo() { }
}
```

![inspector](/assets/core/Button.png)


## CurveRange
Set bounds and modify curve color for AnimationCurves

```csharp
public class SampleComponent : MonoBehaviour
{
	[CurveRange(-1, -1, 1, 1)]
	public AnimationCurve curve;
	
	[CurveRange(EColor.Orange)]
	public AnimationCurve curve1;
	
	[CurveRange(0, 0, 5, 5, EColor.Red)]
	public AnimationCurve curve2;
}
```

![inspector](/assets/core/CurveRange.png)

## Dropdown
Provides an interface for dropdown value selection.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Dropdown("intValues")]
	public int intValue;

	[Dropdown("StringValues")]
	public string stringValue;

	[Dropdown("GetVectorValues")]
	public Vector3 vectorValue;

	private int[] intValues = new int[] { 1, 2, 3, 4, 5 };

	private List<string> StringValues { get { return new List<string>() { "A", "B", "C", "D", "E" }; } }

	private DropdownList<Vector3> GetVectorValues()
	{
		return new DropdownList<Vector3>()
		{
			{ "Right",   Vector3.right },
			{ "Left",    Vector3.left },
			{ "Up",      Vector3.up },
			{ "Down",    Vector3.down },
			{ "Forward", Vector3.forward },
			{ "Back",    Vector3.back }
		};
	}
}
```

![inspector](/assets/core/Dropdown.png)

## EnumFlags
Provides dropdown interface for setting enum flags.

```csharp
public enum Direction
{
	None = 0,
	Right = 1 << 0,
	Left = 1 << 1,
	Up = 1 << 2,
	Down = 1 << 3
}

public class SampleComponent : MonoBehaviour
{
	[EnumFlags]
	public Direction flags;
}
```

![inspector](/assets/core/EnumFlags.png)

## Expandable
Make scriptable objects expandable.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Expandable]
	public ScriptableObject scriptableObject;
}
```

![inspector](/assets/core/Expandable.png)

## HorizontalLine

```csharp
public class SampleComponent : MonoBehaviour
{
	[HorizontalLine(color: EColor.Red)]
	public int red;

	[HorizontalLine(color: EColor.Green)]
	public int green;

	[HorizontalLine(color: EColor.Blue)]
	public int blue;
}
```

![inspector](/assets/core/HorizontalLine.png)

## InfoBox
Used for providing additional information.

```csharp
public class SampleComponent : MonoBehaviour
{
	[InfoBox("This is my int", EInfoBoxType.Normal)]
	public int myInt;

	[InfoBox("This is my float", EInfoBoxType.Warning)]
	public float myFloat;

	[InfoBox("This is my vector", EInfoBoxType.Error)]
	public Vector3 myVector;
}
```

![inspector](/assets/core/InfoBox.png)

## InputAxis
Select an input axis via dropdown interface.

```csharp
public class SampleComponent : MonoBehaviour
{
	[InputAxis]
	public string inputAxis;
}
```

![inspector](/assets/core/InputAxis.png)

## Layer
Select a layer via dropdown interface.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Layer]
	public string layerName;

	[Layer]
	public int layerIndex;
}
```

![inspector](/assets/core/Layer.png)

## MinMaxSlider
A double slider. The **min value** is saved to the **X** property, and the **max value** is saved to the **Y** property of a **Vector2** field.

```csharp
public class SampleComponent : MonoBehaviour
{
	[MinMaxSlider(0.0f, 100.0f)]
	public Vector2 minMaxSlider;
}
```

![inspector](/assets/core/MinMaxSlider.png)

## ProgressBar
```csharp
public class SampleComponent : MonoBehaviour
{
	[ProgressBar("Health", 300, EColor.Red)]
	public int health = 250;

	[ProgressBar("Mana", 100, EColor.Blue)]
	public int mana = 25;

	[ProgressBar("Stamina", 200, EColor.Green)]
	public int stamina = 150;
}
```

![inspector](/assets/core/ProgressBar.png)

## ReorderableList
Provides array type fields with an interface for easy reordering of elements.

```csharp
public class SampleComponent : MonoBehaviour
{
	[ReorderableList]
	public int[] intArray;

	[ReorderableList]
	public List<float> floatArray;
}
```

![inspector](/assets/core/ReorderableList.png)

## ResizableTextArea
A resizable text area where you can see the whole text.
Unlike Unity's **Multiline** and **TextArea** attributes where you can see only 3 rows of a given text, and in order to see it or modify it you have to manually scroll down to the desired row.

```csharp
public class SampleComponent : MonoBehaviour
{
	[ResizableTextArea]
	public string resizableTextArea;
}
```

![inspector](/assets/core/ResizableTextArea.png)

## Scene
Select a scene from the build settings via dropdown interface.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Scene]
	public string bootScene; // scene name

	[Scene]
	public int tutorialScene; // scene index
}
```

![inspector](/assets/core/Scene.png)

## ShowAssetPreview
Shows the texture preview of a given asset (Sprite, Prefab...).

```csharp
public class SampleComponent : MonoBehaviour
{
	[ShowAssetPreview]
	public Sprite sprite;

	[ShowAssetPreview(128, 128)]
	public GameObject prefab;
}
```

![inspector](/assets/core/ShowAssetPreview.png)

## ShowNativeProperty
Shows native C# properties in the inspector.
All native properties are displayed at the bottom of the inspector after the non-serialized fields and before the method buttons.
It supports only certain types **(bool, int, long, float, double, string, Vector2, Vector3, Vector4, Color, Bounds, Rect, UnityEngine.Object)**.

```csharp
public class SampleComponent : MonoBehaviour
{
	public List<Transform> transforms;

	[ShowNativeProperty]
	public int TransformsCount => transforms.Count;
}
```

![inspector](/assets/core/ShowNativeProperty.png)

## ShowNonSerializedField
Shows non-serialized fields in the inspector.
All non-serialized fields are displayed at the bottom of the inspector before the method buttons.
Keep in mind that if you change a non-static non-serialized field in the code - the value in the inspector will be updated after you press **Play** in the editor.
There is no such issue with static non-serialized fields because their values are updated at compile time.
It supports only certain types **(bool, int, long, float, double, string, Vector2, Vector3, Vector4, Color, Bounds, Rect, UnityEngine.Object)**.

```csharp
public class SampleComponent : MonoBehaviour
{
	[ShowNonSerializedField]
	private int myInt = 10;

	[ShowNonSerializedField]
	private const float PI = 3.14159f;

	[ShowNonSerializedField]
	private static readonly Vector3 CONST_VECTOR = Vector3.one;
}
```

![inspector](/assets/core/ShowNonSerializedField.png)

## SortingLayer
Select a sorting layer via dropdown interface.

```csharp
public class SampleComponent : MonoBehaviour
{
	[SortingLayer]
	public string layerName;

	[SortingLayer]
	public int layerId;
}
```

![inspector](/assets/core/SortingLayer.png)

## Tag
Select a tag via dropdown interface.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Tag]
	public string tagField;
}
```

![inspector](/assets/core/Tag.png)