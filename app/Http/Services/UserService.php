<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Http\Request;

class UserService 
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function show(User $role)
    {
        return User::find($role);
    }

    public function update(Request $request, User $role)
    {
        $role->update($request->all());
        return $role;
    }

    public function destroy(User $role)
    {
        return $role->delete();
    }
}
