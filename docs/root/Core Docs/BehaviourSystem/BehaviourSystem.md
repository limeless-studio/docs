# Behaviour System

## Features
- Uses UpdateManager to call objects' `OnUpdate`, `OnFixedUpdate`, and `OnLateUpdate` methods, bypassing Unity's `MonoBehaviour` update system.

- Both `MonoBehaviour` and pure C# classes are supported, just implement `IUpdate`, `IFixedUpdate` and/or `ILateUpdate` interfaces and register the object to be updated using `Register()` extension method. 
    - Remember to unregister the object using `Unregister()` extension method when necessary.

- Inherit `CustomBehaviour` instead of `MonoBehaviour` to automatically register and unregister the object in their `OnEnable` and `OnDisable` messaged. This class still needs to implement `IUpdate`, `IFixedUpdate` and/or `ILateUpdate` interfaces for any of its methods to be called.


## To be implemented
- Manage execution order of registered objects.