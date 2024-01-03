<?php

namespace App\Http\Services;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleService 
{
    public function index()
    {
        return Role::all();
    }

    public function store(Request $request)
    {
        return Role::create($request->all());
    }

    public function show(Role $role)
    {
        return Role::find($role);
    }

    public function update(Request $request, Role $role)
    {
        $role->update($request->all());
        return $role;
    }

    public function destroy(Role $role)
    {
        return $role->delete();
    }
}
