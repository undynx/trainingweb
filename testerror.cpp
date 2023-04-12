#include <iostream>
#include <stdio.h>
#include <string.h>
#include <cstring>
#include <exception>

using namespace std;

void seguroError()
{
    throw std::invalid_argument("Errocito");
}

int main()
{

    try
    {
        seguroError();
    }
    catch (std::exception &e)
    {
        std::cerr << "Exception caught: " << e.what() << "\n";
    }

    return 0;
}