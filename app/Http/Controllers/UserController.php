<?php

namespace App\Http\Controllers;

use App\Http\Services\UserService;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $data = $this->userService->index();

        return Inertia::render('User/Users', [
            'data' => $data
        ]);
    }

    public function create()
    {
        return ['message' => 'create'];
    }

    public function store(Request $request)
    {
        return $this->userService->store($request);
    }

    public function show(User $user)
    {
        return $this->userService->show($user);
    }

    public function edit(User $user)
    {
        return ['message' => 'edit'];
    }

    public function update(Request $request, User $user)
    {
        return $this->userService->update($request, $user);
    }

    public function destroy(User $user)
    {
        return $this->userService->destroy($user);
    }
}
