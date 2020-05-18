#include <iostream>
using namespace std;

int main() {
    unsigned long long N;
    
    cin >> N;
    cout << ((N * (N + 1) * (N - 1)) / 2);
    
    return 0;
}