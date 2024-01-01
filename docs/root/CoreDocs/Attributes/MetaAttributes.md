# Meta Attributes
Give the fields meta data. A field can have more than one meta attributes.

## BoxGroup
Surrounds grouped fields with a box.

```csharp
public class SampleComponent : MonoBehaviour
{
	[BoxGroup("Integers")]
	public int firstInt;
	[BoxGroup("Integers")]
	public int secondInt;

	[BoxGroup("Floats")]
	public float firstFloat;
	[BoxGroup("Floats")]
	public float secondFloat;
}
```

![inspector](/assets/core/BoxGroup.png)

## Foldout
Makes a foldout group.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Foldout("Integers")]
	public int firstInt;
	[Foldout("Integers")]
	public int secondInt;

	[Foldout("Floats")]
	public float firstFloat;
	[Foldout("Floats")]
	public float secondFloat;

	[Foldout("General")]
	public int intGeneral;
	[Foldout("General")]
	public float floatGeneral;
	[Foldout("General")]
	public string stringGeneral;
	[Foldout("General")]
	public bool boolGeneral;
	[Foldout("General")]
	public GameObject gameObjectGeneral;
}
```

![inspector](/assets/core/Foldout.png)

## EnableIf / DisableIf
```csharp
public class SampleComponent : MonoBehaviour
{
	public bool enableMyInt;

	[EnableIf("enableMyInt")]
	public int myInt;

	[EnableIf("Enabled")]
	public float myFloat;

	[EnableIf("NotEnabled")]
	public Vector3 myVector;

	public bool Enabled() { return true; }

	public bool NotEnabled => false;
}
```

![inspector](/assets/core/EnableIf.gif)

You can have more than one condition.

```csharp
public class SampleComponent : MonoBehaviour
{
	public bool flag0;
	public bool flag1;

	[EnableIf(EConditionOperator.And, "flag0", "flag1")]
	public int enabledIfAll;

	[EnableIf(EConditionOperator.Or, "flag0", "flag1")]
	public int enabledIfAny;
}
```

## ShowIf / HideIf
```csharp
public class SampleComponent : MonoBehaviour
{
	public bool showInt;

	[ShowIf("showInt")]
	public int myInt;

	[ShowIf("AlwaysShow")]
	public float myFloat;

	[ShowIf("NeverShow")]
	public Vector3 myVector;

	public bool AlwaysShow() { return true; }

	public bool NeverShow => false;
}
```

![inspector](/assets/core/ShowIf.gif)

You can have more than one condition.

```csharp
public class SampleComponent : MonoBehaviour
{
	public bool flag0;
	public bool flag1;

	[ShowIf(EConditionOperator.And, "flag0", "flag1")]
	public int showIfAll;

	[ShowIf(EConditionOperator.Or, "flag0", "flag1")]
	public int showIfAny;
}
```

## Label
Override default field label.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Label("Short Name")]
	public string veryVeryLongName;

	[Label("RGB")]
	public Vector3 vectorXYZ;
}
```

![inspector](/assets/core/Label.png)

## OnValueChanged
Detects a value change and executes a callback.
Keep in mind that the event is detected only when the value is changed from the inspector.
If you want a runtime event, you should probably use an event/delegate and subscribe to it.

```csharp
public class SampleComponent : MonoBehaviour
{
	[OnValueChanged("OnValueChangedCallback")]
	public int myInt;

	private void OnValueChangedCallback()
	{
		Debug.Log(myInt);
	}
}
```

## ReadOnly
Make a field read only.

```csharp
public class SampleComponent : MonoBehaviour
{
	[ReadOnly]
	public Vector3 forwardVector = Vector3.forward;
}
```

![inspector](/assets/core/ReadOnly.png)