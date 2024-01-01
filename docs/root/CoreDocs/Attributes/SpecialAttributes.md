# Special Attributes

## AllowNesting
By default [Drawer Attributes](/docs/root/CoreDocs/Attributes/DrawerAttributes.md) can be nested inside structs and classes.
[Meta Attributes](/docs/root/CoreDocs/Attributes/MetaAttributes.md) and [Validator Attributes](/docs/root/CoreDocs/Attributes/ValidatorAttributes.md) however are not drawers and don’t support nesting out of the box.
If you want to use EnableIf / DisableIf attributes inside structs for instance, you have to use the `AllowNesting` attribute like so:

```csharp
public class SampleComponent : MonoBehaviour
{
    public MyStruct myStruct;
}

[System.Serializable]
public struct MyStruct
{
    public bool enableFlag;

    [EnableIf("enableFlag")]
    [AllowNesting] // Because it's nested we need to explicitly allow nesting
    public int integer;
}
```
