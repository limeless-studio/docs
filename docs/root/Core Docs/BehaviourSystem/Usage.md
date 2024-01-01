# How to use

### `MonoBehaviour` based

```csharp
using Core;
using UnityEngine;

public class UnityClass : CustomBehaviour, IUpdate, ILateUpdate, IFixedUpdate
{
    public void OnUpdate()
    {
        Debug.Log("Called every frame, alongside other scripts' Update message");
    }

    public void OnLateUpdate()
    {
        Debug.Log("Also called every frame, after update, alongside other scripts' LateUpdate message");
    }

    public void OnFixedUpdate()
    {
        Debug.Log("Also called every fixed frame, alongside other scripts' FixedUpdate message");
    }
}
```

### Pure `C#` class

```csharp
using UnityEngine;

public class PureClass : IUpdate, ILateUpdate, IFixedUpdate
{
    public void OnUpdate()
    {
        Debug.Log("Called every frame, alongside other scripts' Update message");
    }

    public void OnLateUpdate()
    {
        Debug.Log("Also called every frame, after update, alongside other scripts' LateUpdate message");
    }

    public void OnFixedUpdate()
    {
        Debug.Log("Also called every fixed frame, alongside other scripts' FixedUpdate message");
    }

    // call this when you want Updates to start running
    public void StartUpdating()
    {
        this.Register();
        // ^ alias for `UpdateManager.Instance.Register(this)`
    }

    // call this when necessary to stop the updates
    public void StopUpdating()
    {
        this.Unregister();
        // ^ alias for `BehaviourManager.Instance.Unregister(this)`
    }
}
```