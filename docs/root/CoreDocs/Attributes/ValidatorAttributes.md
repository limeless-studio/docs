# Validator Attributes
Used for validating the fields. A field can have infinite number of validator attributes.

## MinValue / MaxValue
Clamps integer and float fields.

```csharp
public class SampleComponent : MonoBehaviour
{
	[MinValue(0), MaxValue(10)]
	public int myInt;

	[MinValue(0.0f)]
	public float myFloat;
}
```

![inspector](/assets/core/MinMaxValue.gif)

## Required
Used to remind the developer that a given reference type field is required.

```csharp
public class SampleComponent : MonoBehaviour
{
	[Required]
	public Transform myTransform;

	[Required("Custom required text")]
	public GameObject myGameObject;
}
```

![inspector](/assets/core/Required.gif)

## ValidateInput
The most powerful ValidatorAttribute.

```csharp
public class _SampleComponent : MonoBehaviour
{
	[ValidateInput("IsNotNull")]
	public Transform myTransform;

	[ValidateInput("IsGreaterThanZero", "myInteger must be greater than zero")]
	public int myInt;

	private bool IsNotNull(Transform tr)
	{
		return tr != null;
	}

	private bool IsGreaterThanZero(int value)
	{
		return value > 0;
	}
}
```

![inspector](/assets/core/ValidateInput.gif)