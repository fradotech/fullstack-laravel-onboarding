<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Http\Request;

class UserService
{
    public function index()
    {
        return User::with('role')->get()->toArray();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['password'] = $data['password'] ?? $data['email'];

        return User::create($data);
    }

    public function show($id)
    {
        return User::with('role')->find($id);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return $user;
    }

    public function destroy(User $user)
    {
        return $user->delete();
    }
}
